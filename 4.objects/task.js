function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    
    if("marks" in this) {
        this.marks.push(...marks);
    } else {
        console.log("Студент отчислен за" + this.reason + ", поставить ему оценку невозможно");
    }
}

Student.prototype.getAverage = function () {
  
    if("marks" in this && this.marks.length !== 0) {
        let totalMarkCount = this.marks.reduce((acc, item) => acc + item, 0);
        let averageMark = totalMarkCount / this.marks.length;
        return averageMark;
    } else {
        return 0;
    }
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}
