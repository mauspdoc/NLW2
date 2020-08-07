const Database = require('./db');
const createProffy = require('./createProffy'); // Function to create

Database.then(async (db) => {
  const proffyValue = {
    name: 'Mayk Brito',
    avatar: 'https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4',
    whatsapp: '8998877665',
    bio: 'Instrutor de educação física',
  };

  const classValue = {
    subject: 2,
    cost: '20',
  };

  const classScheduleValues = [
    {
      weekday: 1,
      time_from: 720,
      time_to: 1220,
    },
    {
      weekday: 0,
      time_from: 520,
      time_to: 1220,
    },
  ];

  // await createProffy(db, { proffyValue, classValue, classScheduleValues });

  // Get all proffys
  const selectedProffys = await db.all('SELECT * FROM proffys');
  // console.log(selectedProffys);

  // Get all classes's teacher and data from this teacher
  const selectedClassesAndProffys = await db.all(`
      SELECT classes.*, proffys.*
      FROM proffys
      JOIN classes ON (classes.proffy_id = proffys.id)
      WHERE classes.proffy_id = 1;
    `);

  const selectedClasssesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
    `);
  // console.log(selectedClasssesSchedules);
});
