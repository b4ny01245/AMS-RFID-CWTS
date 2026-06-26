# 📡 AMS-RFID-CWTS

An RFID-based Attendance Management System developed to automate attendance tracking for CWTS classes and training sessions.

## Overview

AMS-RFID-CWTS is a web-based attendance management system that utilizes RFID technology to record student attendance quickly and accurately. The system eliminates manual attendance recording by allowing students to scan their RFID cards, automatically logging their attendance and maintaining individual attendance records.

The original project utilized **Google Sheets** as its cloud-based database through **Google Apps Script**. For privacy and security reasons, the online database and its associated credentials have been removed from this public repository. To allow the project to remain functional as a portfolio demonstration, the application has been modified to use the browser's Local Storage for data persistence.

## Features

* 📡 RFID-based Attendance Scanning
* 👨‍🎓 Student Registration and Management
* 📝 Automatic Attendance Recording
* 🚫 Duplicate Attendance Prevention
* 📊 Student Attendance History
* 📈 Attendance Statistics and Performance Monitoring
* 🔍 Search Students by RFID
* 💾 Local Data Storage (For viewing Version)

## Technologies Used

* JavaScript
* HTML5
* CSS3
* Google Apps Script *(Original Version)*
* Google Sheets *(Original Cloud Database)*
* Browser Local Storage *(For Viewing)*
* Git & GitHub

## Repository Notice

This repository contains a **for viewing** of the project.

The original system stored attendance records using **Google Sheets** integrated with **Google Apps Script**. To protect database privacy and prevent unauthorized access, all cloud database configurations, credentials, and deployment resources have been removed.

This repository has been adapted to use the browser's Local Storage so the application remains functional for demonstration and educational purposes.

## Demo Login

Use the following RFID numbers to access the dashboard:

```text
0000909395
0000227855
```

You may also manually enter either RFID number to log in.

## Getting Started

### 1. Login

* Scan one of the demo RFID numbers.
* Or manually enter:

```text
0000909395
0000227855
```

### 2. Register Students

From the Dashboard:

* Click **Add Student**
* Complete the following information:

  * RFID Number
  * Student ID
  * Student Name
  * Gender
  * Address
  * Contact Number
* Click **Add Student** to save.

> Student records are stored locally in your browser.

### 3. Record Attendance

* Open **Attendance Scanner**
* Scan or manually enter an RFID number.
* Press **Enter**.
* The system will:

  * Record today's attendance
  * Display a confirmation message
  * Prevent duplicate attendance entries for the same day
  * Display today's attendance list

### 4. View Student Performance

Navigate to **Student Performance** to view:

* Student Information
* Total Attendance Count
* Complete Attendance History
* Attendance Timestamps

Search by RFID or select a student from the list.

### 5. Logout

Click **Logout** to safely end your session.

## Copyright

Copyright © 2026 b4ny01245. All rights reserved.

This repository is provided for viewing and evaluation purposes only.

No permission is granted to copy, modify, redistribute, publish, or use any part of this source code without the prior written permission of the copyright owner.

## Disclaimer

This project was originally developed using Google Sheets as its cloud database. To protect database privacy and security, all cloud configurations, credentials, and deployment files have been removed from this public repository.

The published version has been modified to use browser Local Storage and is intended solely for portfolio demonstration and educational purposes.
