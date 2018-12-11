import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';








/* ionic pro
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

    test : string;
    all_courses : string;
    quiz_details : string;
    check_quiz : string;
    testingapiurl : string;
    loaddoubtsurl : string;
    createdoubturl : string;
    loginurl : string;
    commentondoubturl : string;
    allcommentsurl : string;
    quizcompleteurl : string;
    all_quizes : string;
    createmeetingurl : string;
    // http://139.59.86.57:8000/
    constructor(public http: Http) {
        console.log('Hello AuthServiceProvider Provider');
        this.http = http;
        this.test = "http://139.59.86.57:8000/api/courses/professor";
        this.all_courses = "http://139.59.86.57:8000/api/courses/student/";
        this.quiz_details = "http://139.59.86.57:8000/api/quiz-details/";
        this.check_quiz = "http://139.59.86.57:8000/api/check-quiz/";
        this.loaddoubtsurl  = "http://139.59.86.57:8000/api/doubts/";
        this.createdoubturl = "http://139.59.86.57:8000/api/doubts/";
        this.loginurl = "http://139.59.86.57:8000/api/login/";
        this.commentondoubturl = "http://139.59.86.57:8000/api/comment-on-doubt/";
        this.allcommentsurl = "http://139.59.86.57:8000/api/comments/"
        this.quizcompleteurl = "http://139.59.86.57:8000/api/quiz-complete/"
        this.all_quizes = "http://139.59.86.57:8000/api/all-student-quizes/"
        this.createmeetingurl = "http://139.59.86.57:8000/api/create-meeting/"
        this.testingapiurl = "https://serene-wildwood-35121.herokuapp.com/oauth/getDetails";
        // this.drinkingurl = "http://localhost:8000/sensors/api/drinking/";
    }

    testing() {
        let body = {
            "email": "email",
            "value":"value",
        };

        let headers = new Headers({
            'Content-Type' : 'application/json; charset=utf-8'
        });
        let options = new RequestOptions({ headers: headers});
        console.log(body);
        return this.http.get(this.test, options)
            .map(res => res.json())
            .catch(this.handleError);
    }

    login(user_credentials) {
        let body = {
            "login":true,
            "json_data":user_credentials,
        };

        let headers = new Headers({
            'Content-Type' : 'application/json; charset=utf-8'
        });
        let options = new RequestOptions({ headers: headers});
        console.log(body);
        return this.http.post(this.loginurl, body, options)
            .map(res => res.json())
            .catch(this.handleError);
    }


    allCourses(email){
        let body = {
        };

        let headers = new Headers({
            'Content-Type' : 'application/json; charset=utf-8'
        });
        let options = new RequestOptions({ headers: headers});
        console.log(body);
        return this.http.get(this.all_courses+"quiz/"+email, options)
            .map(res => res.json())
            .catch(this.handleError);
    }

    testingApi(){
        let payload = {
             token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDUsImlhdCI6MTU0MDQ0Mjk0NCwiZXhwIjoxNTQzMDM0OTQ0fQ.uYdD_ZqtnecbtiqWHUUtPQyYj4Y_TMGSUtZFJva-xvc', 
             secret: '5bd09a7e89128700158c1e94'
        };

        let headers = new Headers({
            'Content-Type' : 'application/json; charset=utf-8'
        });
        let options = new RequestOptions({ headers: headers});
        console.log(payload);
        return this.http.post(this.testingapiurl, payload,options)
            .map(res => res.json())
            .catch(this.handleError);
    }

    quizDetails(quiz_id){
        let body = {
        };

        let headers = new Headers({
            'Content-Type' : 'application/json; charset=utf-8'
        });
        let options = new RequestOptions({ headers: headers});
        console.log(body);
        return this.http.get(this.quiz_details+quiz_id, options)
            .map(res => res.json())
            .catch(this.handleError);
    }

    checkQuiz(quiz_id, course_id, email){
        let body = {
        };

        let headers = new Headers({
            'Content-Type' : 'application/json; charset=utf-8'
        });
        let options = new RequestOptions({ headers: headers});
        console.log(body);
        return this.http.get(this.check_quiz+quiz_id+"/"+course_id+"/"+email+"/", options)
            .map(res => res.json())
            .catch(this.handleError);
    }

    allQuizes(course_id, email){
        let body = {
        };

        let headers = new Headers({
            'Content-Type' : 'application/json; charset=utf-8'
        });
        let options = new RequestOptions({ headers: headers});
        console.log(body);
        return this.http.get(this.all_quizes+course_id+"/"+email+"/", options)
            .map(res => res.json())
            .catch(this.handleError);
    }

    loadDoubts(course_id, email){
        let body = {
        };

        let headers = new Headers({
            'Content-Type' : 'application/json; charset=utf-8'
        });
        let options = new RequestOptions({ headers: headers});
        console.log(body);
        return this.http.get(this.loaddoubtsurl+course_id+"/"+email+"/", options)
            .map(res => res.json())
            .catch(this.handleError);
    }

    createDoubt(course_id, email, form){
        let body = {
            "email":email,
            "data":form
        };

        let headers = new Headers({
            'Content-Type' : 'application/json; charset=utf-8'
        });
        let options = new RequestOptions({ headers: headers});
        console.log(body);
        return this.http.post(this.createdoubturl+course_id+"/"+email+"/", body, options)
            .map(res => res.json())
            .catch(this.handleError);
    }

    getMeetings(course_id, email){
        let body = {
            
        };

        let headers = new Headers({
            'Content-Type' : 'application/json; charset=utf-8'
        });
        let options = new RequestOptions({ headers: headers});
        console.log(body);
        return this.http.get(this.createmeetingurl+course_id+"/"+email+"/", options)
            .map(res => res.json())
            .catch(this.handleError);
    }

    createMeeting(course_id, email, form){
        let body = {
            "email":email,
            "data":form
        };

        let headers = new Headers({
            'Content-Type' : 'application/json; charset=utf-8'
        });
        let options = new RequestOptions({ headers: headers});
        console.log(body);
        return this.http.post(this.createmeetingurl+course_id+"/"+email+"/", body, options)
            .map(res => res.json())
            .catch(this.handleError);
    }

    allComments(doubt_id){
        let body = {
            "doubt_id":doubt_id,
        };

        let headers = new Headers({
            'Content-Type' : 'application/json; charset=utf-8'
        });
        let options = new RequestOptions({ headers: headers});
        console.log(body);
        return this.http.get(this.allcommentsurl+doubt_id, options)
            .map(res => res.json())
            .catch(this.handleError);
    }

    commentOnDoubt(doubt_id, email, comment){
        let body = {
            "email":email,
            "doubt_id":doubt_id,
            "text":comment
        };

        let headers = new Headers({
            'Content-Type' : 'application/json; charset=utf-8'
        });
        let options = new RequestOptions({ headers: headers});
        console.log(body);
        return this.http.post(this.commentondoubturl, body, options)
            .map(res => res.json())
            .catch(this.handleError);
    }

    quizComplete(question_response, quiz_id, email, score){
        let body = {
            "quiz_id":quiz_id,
            "email":email,
            "quiz_response":question_response,
            "marks":score
        };
        let headers = new Headers({
            'Content-Type' : 'application/json; charset=utf-8'
        });
        let options = new RequestOptions({ headers: headers});
        console.log(body);
        return this.http.post(this.quizcompleteurl, body, options)
            .map(res => res.json())
            .catch(this.handleError);
    }
    

    handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server Error');
    }

}

