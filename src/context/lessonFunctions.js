
export function setLessonAtts(assignments) {
   let classroomAtts = [];
    classroomAtts = assignments.map( (assignment, index) => {
        classroomAtts.push(assignment.due_date)
        assignment.map( tax => {
            classroomAtts.push(tax.name)
        })
    })


}