/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {


	'new': function(req, res){
	  // res.locals.flash = _.clone(req.session.flash);
       res.view();
      // req.session.flash = {};
	},


    'create': function(req, res, next){

      User.create(req.params.all(), function userCreated(err, user){

             //if there is an error
             if(err) {
               // console.log(err);
                req.session.flash = {
                	err: err
                }
          
              //if error, redirected back to the sign up page
              return res.redirect('/user/new');

             }

             //after sucessfully crateting the user redirect to the show action

            // res.json(user);
             req.session.flash = {};

             res.redirect('/user/show/'+user.id);

      });

    },

'show': function(req, res, next){

   User.findOne(req.params['id'], function foundUser(err, user){

	     if(err) return next(err);

	     if(!user) return next();

	     res.view({
	          user:user
	     });

   });

},


'index': function(req, res, next){

   User.find(function foundUsers(err, users){

	     if(err) return next(err);


	     res.view({
	          users: users
	     });

   });

}


};