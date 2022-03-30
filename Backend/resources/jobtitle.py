from flask_restful import Resource, reqparse
from models.jobtitle import JobTitleModel
from schemas.jobtitle import JobTitleSchema

jobtitle_schema = JobTitleSchema()
job_list_schema = JobTitleSchema(many=True)

class Job(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('jobtitle',
                        type=str,
                        required=True,
                        help="Please enter your job title"
                        )

    def get(self, jobtitle):
        job = JobTitleModel.find_by_jobtitle(jobtitle)
        if job:
            return jobtitle_schema.dump(job), 200
        return {'message': 'Job title not found'}, 404

    def post(self, jobtitle):
        if JobTitleModel.find_by_jobtitle(jobtitle):
            return {'message': "A job title '{}' already exists.".format(jobtitle)}, 400

        # get input data
        data = Job.parser.parse_args()

        job = JobTitleModel(data['jobtitle'])
        try:
            job.save_to_db()
        except Exception as e:
            print(e)
            return {"message": "An error occurred creating the job title."}, 500

        return jobtitle_schema.dump(job), 200

    def delete(self, jobtitle):
        job = JobTitleModel.find_by_jobtitle(jobtitle)
        if job:
            job.delete_from_db()
        else:
            return {'message': 'job title not found'}, 404
        return {'message': 'Job title deleted',
                'job': jobtitle_schema.dump(job)}


    def put(self, jobtitle):
        data = Job.parser.parse_args()

        job = JobTitleModel.find_by_jobtitle(jobtitle)
        if job:
            if data['jobtitle'] != None:
                job.jobtitle = data['jobtitle']
        else:
            print('jobtitle')
            job = JobTitleModel(data['JobTitle'])

        job.save_to_db()

        return jobtitle_schema.dump(job), 201



class JobTitleList(Resource):
    def get(self):
        # return {'stores': list(map(lambda x: x.json(), StoreModel.query.all()))}
        return {"jobtitles": job_list_schema.dump(JobTitleModel.query.all())}, 200
