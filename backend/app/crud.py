from sqlalchemy.orm import Session
from . import schemas, models


# retrieve student based on id
def get_student(db: Session, student_id: id):
    return db.query(models.Student).filter(models.Student.id == student_id).first()


# retrieve all students
def get_students(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Student).offset(skip).limit(limit).all()


# create new student
def create_student(db: Session, student: schemas.StudentCreate):
    db_student = models.Student(name=student.name, email=student.email, age=student.age)
    db.add(db_student)
    db.commit()
    db.refresh(db_student)
    return db_student


# update student
def update_student(db: Session, student_id: int, student_update: schemas.StudentUpdate):
    db_student = get_student(db, student_id)

    if db_student:
        update_data = student_update.model_dump(exclude_unset=True)
        for key, value in update_data.items():
            setattr(db_student, key, value)
        db.commit()
        db.refresh(db_student)

    return db_student


# delete student
def delete_student(db: Session, student_id: int):
    db_student = get_student(db, student_id)

    if db_student:
        db.delete(db_student)
        db.commit()

    return db_student
