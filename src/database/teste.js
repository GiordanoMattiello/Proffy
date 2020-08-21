const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    classValue = {
        subject: 1,
        cost: "20",
    }
    classScheduleValues = [
        {        
            weekday: 0,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 1,
            time_from: 520,
            time_to: 1220
        }
    ]

    proffyValue = {
        name:"Diego",
        avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4" ,
        whatsapp: "123456789",
        bio: "Entusiasta das melhores tecnologias de química avançada.Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        
    }

    //await createProffy(db,{proffyValue,classValue,classScheduleValues})
    // const allProffys = await db.all("SELECT * FROM proffys")
    // console.log(allProffys)

    // const proffy =   await db.all(`
    //     SELECT c.*, p.*,s.* FROM proffys p , classes c, class_schedule s  WHERE c.proffy_id == p.id AND c.id == s.class_id
    // `)
    //     
    

    // const proffy =   await db.all(`
    //     SELECT classes.*, proffys.*
    //     FROM proffys
    //     JOIN classes ON (classes.proffy_id == proffys.id)
    //     WHERE classes.proffy_id = 1
    // `)
    // console.log(proffy)
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday == "1"
        AND class_schedule.time_from <=  "480"
        AND class_schedule.time_to >  "1400"
    `)   
    console.log(selectClassesSchedules)
})
