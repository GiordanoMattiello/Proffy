const subjects= [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
    "Pirocada"
]
const weekdays= [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
]

function getSubject(subjectNumber){
    return subjects[subjectNumber-1]

}
function convertHousToMinutes(time){
    let [hours,minutes] = time.split(':')
    return Number((hours*60)+Number(minutes))

}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHousToMinutes

}