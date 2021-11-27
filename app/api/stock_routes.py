from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import Portfolio, db


stock_routes = Blueprint('stocks', __name__)

@stock_routes.route('/')
def getStocks():
    
    # return {"downloads":downloads}
    return { download["symbol"]: download for download in downloads}
        