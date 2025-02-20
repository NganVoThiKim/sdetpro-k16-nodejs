
// Data
const teo = { name: "Teo", grades: [9, 8, 6] };
const ti = JSON.parse(JSON.stringify(teo));
ti.name = "Ti";
ti.grades = [7, 9, 9];

const tun = JSON.parse(JSON.stringify(teo));
tun.name = "Tun";
tun.grades = [6, 7, 8];

// Usage
const bestStudentInfo = findBestStudent([teo, ti, tun]);
//console.log(bestStudentInfo);



const { bestStudent, avgScore } = bestStudentInfo;
console.log(`The best student is: ${JSON.stringify(bestStudent.name)} with highest avg score is: ${JSON.stringify(avgScore)}`);

// Controllers
function findBestStudent(students) {
    let bestStudent = students[0];
    let currentHighScore = 0;
    for (const student of students) { // For of: lấy từng giá trị trong mảng ra không cần thay đổi giá trị{}
        const averageScore = calculateAverageScore(student);
        if (averageScore >= currentHighScore) {
            bestStudent = student;
            currentHighScore = averageScore;
        }
    }

    return {
        bestStudent: bestStudent,
        avgScore: currentHighScore
    };
}

function calculateAverageScore({ grades }) {
    let totalScore = 0;
    for (const grade of grades) {
        //totalScore += grade;
        totalScore = totalScore + grade;
    }
    return Math.ceil(totalScore / grades.length);
}

