// Google Sheets API utilities for lead storage

import { google } from 'googleapis';

export class GoogleSheetsService {
  private sheets;
  private spreadsheetId: string;

  constructor() {
    const credentials = JSON.parse(
      process.env.GOOGLE_SHEETS_CREDENTIALS || '{}'
    );

    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    this.sheets = google.sheets({ version: 'v4', auth });
    this.spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID || '';
  }

  async addLead(leadData: {
    name: string;
    email: string;
    phone: string;
    businessType: string;
    message?: string;
    source: string;
  }) {
    try {
      const timestamp = new Date().toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
      });

      const values = [
        [
          timestamp,
          leadData.name,
          leadData.email,
          leadData.phone,
          leadData.businessType,
          leadData.message || '',
          leadData.source,
          'New', // Status
        ],
      ];

      const response = await this.sheets.spreadsheets.values.append({
        spreadsheetId: this.spreadsheetId,
        range: 'Leads!A:H',
        valueInputOption: 'USER_ENTERED',
        requestBody: { values },
      });

      return response.data;
    } catch (error) {
      console.error('Google Sheets error:', error);
      throw error;
    }
  }

  async getLeads(limit = 100) {
    try {
      const response = await this.sheets.spreadsheets.values.get({
        spreadsheetId: this.spreadsheetId,
        range: `Leads!A2:H${limit + 1}`,
      });

      return response.data.values || [];
    } catch (error) {
      console.error('Google Sheets error:', error);
      throw error;
    }
  }

  async updateLeadStatus(rowIndex: number, status: string) {
    try {
      const response = await this.sheets.spreadsheets.values.update({
        spreadsheetId: this.spreadsheetId,
        range: `Leads!H${rowIndex}`,
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [[status]],
        },
      });

      return response.data;
    } catch (error) {
      console.error('Google Sheets error:', error);
      throw error;
    }
  }

  // Initialize sheet with headers
  async initializeSheet() {
    try {
      const headers = [
        [
          'Timestamp',
          'Name',
          'Email',
          'Phone',
          'Business Type',
          'Message',
          'Source',
          'Status',
        ],
      ];

      const response = await this.sheets.spreadsheets.values.update({
        spreadsheetId: this.spreadsheetId,
        range: 'Leads!A1:H1',
        valueInputOption: 'USER_ENTERED',
        requestBody: { values: headers },
      });

      return response.data;
    } catch (error) {
      console.error('Google Sheets error:', error);
      throw error;
    }
  }
}

// Simple fallback using localStorage for development
export class LocalStorageLeads {
  private storageKey = 'punecowork_leads';

  addLead(leadData: any) {
    const leads = this.getLeads();
    const newLead = {
      ...leadData,
      timestamp: new Date().toISOString(),
      status: 'New',
    };
    leads.push(newLead);
    localStorage.setItem(this.storageKey, JSON.stringify(leads));
    return newLead;
  }

  getLeads() {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  clearLeads() {
    localStorage.removeItem(this.storageKey);
  }
}
