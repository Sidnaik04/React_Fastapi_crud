from pydantic import BaseModel
from typing import Optional


class StudentBase(BaseModel):
    name: str
    email: str
    age: int


class StudentCreate(StudentBase):
    pass


class StudentUpdate(BaseModel):
    name: Optional[str] = None
    email: Optional[str] = None
    age: Optional[int] = None

    model_config = {"from_attributes": True}


class Student(StudentBase):
    id: int

    model_config = {"from_attributes": True}
