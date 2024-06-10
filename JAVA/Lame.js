document.getElementById('addCourse').addEventListener('click', function () {
    const courseCount = document.querySelectorAll('.course').length + 1;
    const courseDiv = document.createElement('div');
    courseDiv.className = 'course';
    courseDiv.innerHTML = `
        <label>Course ${courseCount}:</label>
        <input type="number" placeholder="Grade" class="grade" min="10" max="100" step="0.01" required>
        <input type="number" placeholder="Credits" class="credits" min="1" required>
    `;
    document.getElementById('courses').appendChild(courseDiv);
});

document.getElementById('cgpaForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const grades = document.querySelectorAll('.grade');
    const credits = document.querySelectorAll('.credits');

    let totalPoints = 0;
    let totalCredits = 0;

    for (let i = 0; i < grades.length; i++) {
        const grade = parseFloat(grades[i].value);
        const credit = parseFloat(credits[i].value);

        totalPoints += grade * credit;
        totalCredits += credit;
    }

    const cgpa = totalPoints / totalCredits;
    document.getElementById('result').textContent = `Your CGPA is: ${cgpa.toFixed(2)}`;
});
