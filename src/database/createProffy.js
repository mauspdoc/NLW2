/* eslint-disable camelcase */
module.exports = async function createProffy(db, {
  proffyValue,
  classValue,
  classScheduleValues,
}) {
  // insert data in proffys's table
  // proffy_id is auto generate
  const insertedProffy = await db.run(`
      INSERT INTO proffys (
          name,
          avatar,
          whatsapp,
          bio
      ) VALUES (
          "${proffyValue.name}",
          "${proffyValue.avatar}",
          "${proffyValue.whatsapp}",
          "${proffyValue.bio}"
      );
    `);

  const proffy_id = insertedProffy.lastID;

  // insert data in classes's table
  const insertedClass = await db.run(`
        INSERT INTO classes (
          subject,
          cost,
          proffy_id
        ) VALUES (
          "${classValue.subject}",
          "${classValue.cost}",
          "${proffy_id}"
        );
    `);

  const class_id = insertedClass.lastID;

  // insert data in class_schedule's table
  const insertedAllClassScheduleValues = classScheduleValues.map((classScheduleValue) => db.run(`
          INSERT INTO class_schedule (
            class_id,
            weekday,
            time_from,
            time_to
          ) VALUES (
            "${class_id}",
            "${classScheduleValue.weekday}",
            "${classScheduleValue.time_from}",
            "${classScheduleValue.time_to}"
          );
      `));
  await Promise.all(insertedAllClassScheduleValues);
};
