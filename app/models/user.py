from app.models import portfolio
from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    buying_power = db.Column(db.Float, nullable=False)
    profile_image = db.Column(db.String(255), nullable=True)
    motto = db.Column(db.String(255), nullable=True)

    portfolios = db.relationship("Portfolio", back_populates="user")
    transactions = db.relationship("Transaction", back_populates="user")
    watchlists = db.relationship("Watchlist", back_populates="user")

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'buying_power': self.buying_power,
            'profile_image': self.profile_image,
            'motto': self.motto,
        }
