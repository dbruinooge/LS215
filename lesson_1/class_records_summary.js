let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

function generateClassRecordSummary(scores) {
  return {
    studentGrades: formatStudentGrades(scores),
    exams: calculateExamScores(scores),
  };
}

function formatStudentGrades(scores) {
  let result = [];
  Object.keys(scores).forEach(student => {
    let score = averageGrade(scores[student]);
    result.push(`${score} (${letterGrade(score)})`);
  });
  
  return result;
}

function averageGrade(student) {
  let examGrades = student.scores.exams;
  let exerciseGrades = student.scores.exercises;
  
  let finalExamGrade = examGrades.reduce((sum, grade) => sum + grade) / examGrades.length;
  let finalExerciseGrade = exerciseGrades.reduce((sum, grade) => sum + grade);
  
  return Math.round(finalExamGrade * 0.65 + finalExerciseGrade * 0.35);
}

function letterGrade(score) {
  if (score >= 93) {
    return 'A';
  } else if (score >= 85) {
    return 'B';
  } else if (score >= 77) {
    return 'C';
  } else if (score >= 69) {
    return 'D';
  } else if (score >= 60) {
    return 'E';
  }
  
  return 'F';
}

function calculateExamScores(scores) {
  let result = [];
  
  for (let index = 0; index < 4; index += 1) {
    let examScores = getExamScores(scores, index);
    result.push({
      average: examAverage(examScores),
      minimum: examMinimum(examScores),
      maximum: examMaximum(examScores),
    });
  }
  
  return result;
}

function getExamScores(scores, index) {
  let result = [];
  
  Object.keys(scores).forEach(student => {
    result.push(scores[student].scores.exams[index]);
  });
  
  return result;
}

function examAverage(examScores) {
  let avg = examScores.reduce((sum, value) => sum + value) / examScores.length;
  return Math.round(avg * 10) / 10;
}

function examMinimum(examScores) {
  return examScores.reduce((previous, current) => previous < current ? previous : current);
}

function examMaximum(examScores) {
  return examScores.reduce((previous, current) => previous > current ? previous : current);
}

let records = generateClassRecordSummary(studentScores);
console.log(records);

// returns:
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }
