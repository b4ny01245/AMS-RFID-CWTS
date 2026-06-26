// Utility functions for the Attendance Management System
// Uses localStorage for data persistence

// Valid login RFIDs
const VALID_LOGIN_RFIDS = ["0000909395", "0000227855"];

// Initialize localStorage if needed
function initializeStorage() {
    if (!localStorage.getItem('students')) {
        localStorage.setItem('students', JSON.stringify([]));
    }
    if (!localStorage.getItem('attendance')) {
        localStorage.setItem('attendance', JSON.stringify([]));
    }
}

// Add a new student
function addStudent(studentData) {
    let students = JSON.parse(localStorage.getItem('students') || '[]');
    const id = Date.now();
    const newStudent = {
        id: id,
        rfid: studentData.rfid,
        studentId: studentData.studentId,
        name: studentData.name,
        gender: studentData.gender,
        address: studentData.address,
        contact: studentData.contact,
        dateAdded: new Date().toLocaleString()
    };
    students.push(newStudent);
    localStorage.setItem('students', JSON.stringify(students));
    return newStudent;
}

// Get all students
function getAllStudents() {
    return JSON.parse(localStorage.getItem('students') || '[]');
}

// Get student by RFID
function getStudentByRFID(rfid) {
    const students = getAllStudents();
    return students.find(s => s.rfid === rfid);
}

// Mark attendance for a student
function markAttendance(rfid) {
    const student = getStudentByRFID(rfid);
    if (!student) {
        return { success: false, message: 'Student not found' };
    }

    let attendance = JSON.parse(localStorage.getItem('attendance') || '[]');
    const today = new Date().toDateString();
    
    // Check if student already marked attendance today
    const alreadyMarked = attendance.find(a => 
        a.rfid === rfid && 
        new Date(a.timestamp).toDateString() === today
    );

    if (alreadyMarked) {
        return { success: false, message: 'Attendance already marked today' };
    }

    attendance.push({
        rfid: rfid,
        studentId: student.studentId,
        name: student.name,
        timestamp: new Date().toLocaleString(),
        date: today
    });

    localStorage.setItem('attendance', JSON.stringify(attendance));
    return { success: true, message: `Welcome ${student.name}!` };
}

// Get student performance (attendance record)
function getStudentPerformance(rfid) {
    const student = getStudentByRFID(rfid);
    if (!student) {
        return null;
    }

    const attendance = JSON.parse(localStorage.getItem('attendance') || '[]');
    const studentAttendance = attendance.filter(a => a.rfid === rfid);

    return {
        student: student,
        attendanceCount: studentAttendance.length,
        attendanceRecords: studentAttendance
    };
}

// Get all attendance records
function getAllAttendance() {
    return JSON.parse(localStorage.getItem('attendance') || '[]');
}

// Check if user is logged in
function isLoggedIn() {
    return sessionStorage.getItem('loggedIn') === 'true';
}

// Set logged in state
function setLoggedIn(value) {
    if (value) {
        sessionStorage.setItem('loggedIn', 'true');
    } else {
        sessionStorage.removeItem('loggedIn');
    }
}

// Logout
function logout() {
    setLoggedIn(false);
    window.location.href = 'index.html';
}

// Delete student
function deleteStudent(id) {
    let students = JSON.parse(localStorage.getItem('students') || '[]');
    students = students.filter(s => s.id !== id);
    localStorage.setItem('students', JSON.stringify(students));
}

// Export data (for demonstration)
function exportData() {
    const students = getAllStudents();
    const attendance = getAllAttendance();
    const data = {
        students: students,
        attendance: attendance,
        exportDate: new Date().toLocaleString()
    };
    return data;
}

// Initialize on page load
initializeStorage();
