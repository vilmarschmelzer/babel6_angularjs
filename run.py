from task_list import app, db
from task_list.models import *
db.create_all()
app.run(host='0.0.0.0', port=5000)
