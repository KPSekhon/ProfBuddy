class Person {
    constructor(name, fieldOfStudy) {
      this.name = name;
      this.fieldOfStudy = fieldOfStudy;
    }
  }
  
  class Professor extends Person {
    constructor(name, fieldOfStudy) {
      super(name, fieldOfStudy);
    }
  }
  
  class Student extends Person {
    constructor(name, fieldOfStudy) {
      super(name, fieldOfStudy);
    }
  }
  
  function matchAndSelectStudent(professor, students) {
    // Filter students based on matching fieldOfStudy
    const matchingStudents = students.filter(student => student.fieldOfStudy === professor.fieldOfStudy);
  
    if (matchingStudents.length > 0) {
      // Randomly select one of the matching students
      const randomIndex = Math.floor(Math.random() * matchingStudents.length);
      const selectedStudent = matchingStudents[randomIndex];
      return selectedStudent;
    } else {
      console.log('No matching students found.');
      return null;
    }
  }

  function matchAndSelectProfessor(student, professors) {
    // Filter professors based on matching fieldOfStudy
    const matchingProfessors = professors.filter(professor => professor.fieldOfStudy === student.fieldOfStudy);
  
    if (matchingProfessors.length > 0) {
      // Randomly select one of the matching professors
      const randomIndex = Math.floor(Math.random() * matchingProfessors.length);
      const selectedProfessor = matchingProfessors[randomIndex];
      return selectedProfessor;
    } else {
      console.log('No matching professors found.');
      return null;
    }
  }



  
  // Example usage:
  
  const prof1 = new Professor('Dr. Smith', 'Computer Science');
  const student1 = new Student('Alice', 'Computer Science');
  const student2 = new Student('Bob', 'Physics');
  const student3 = new Student('Charlie', 'Computer Science');
  
  const studentsArray = [student1, student2, student3];
  
  const selectedStudent = matchAndSelectStudent(prof1, studentsArray);
  
  if (selectedStudent) {
    console.log(`Professor ${prof1.name} matched with student ${selectedStudent.name}`);
  } else {
    console.log(`Professor ${prof1.name} did not match with any students.`);
  }
  