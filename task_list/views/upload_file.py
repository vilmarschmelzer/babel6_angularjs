import os
from flask.views import MethodView
from flask import Flask, render_template, request, redirect, url_for, send_from_directory
from task_list import auth, db, app
from task_list.models import User
from flask_restful import Resource
from werkzeug.utils import secure_filename



class UploadIndexView(MethodView):

    #decorators = [auth.login_required]

    def get(self):
        return render_template('upload.html')


def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1] in app.config['ALLOWED_EXTENSIONS']


class UploadView(Resource):

    #decorators = [auth.login_required]

    def post(self):
        # Get the name of the uploaded file
        file = request.files['file']
        # Check if the file is one of the allowed types/extensions
        if file and allowed_file(file.filename):
            # Make the filename safe, remove unsupported chars
            filename = secure_filename(file.filename)
            # Move the file form the temporal folder to
            # the upload folder we setup
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            # Redirect the user to the uploaded_file route, which
            # will basicaly show on the browser the uploaded file
            #return redirect(url_for('uploaded_file',
            #                        filename=filename))
            return 'Sucesso', 202