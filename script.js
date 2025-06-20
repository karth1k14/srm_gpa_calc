// script.js
document.getElementById("add-subject").addEventListener("click", () => {
  const formRow = document.querySelector(".form-row").cloneNode(true);
  formRow.querySelector("input.subject-name").value = "";
  formRow.querySelector("select.grade").value = "";
  formRow.querySelector("input.credit").value = "";
  document.getElementById("subject-form").insertBefore(formRow, document.getElementById("add-subject"));
});

document.getElementById("subject-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const subjects = document.querySelectorAll(".form-row");

  let totalPoints = 0;
  let totalCredits = 0;

  subjects.forEach(row => {
    const gradePoint = parseFloat(row.querySelector(".grade").value);
    const credit = parseFloat(row.querySelector(".credit").value);

    if (!isNaN(gradePoint) && !isNaN(credit)) {
      totalPoints += gradePoint * credit;
      totalCredits += credit;
    }
  });

  const gpa = totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : 0;
  document.getElementById("result").textContent = `📊 Your GPA is: ${gpa}`;
});

function removeSubject(button) {
  const allRows = document.querySelectorAll(".form-row");
  if (allRows.length > 1) {
    button.parentElement.remove();
  }
}
