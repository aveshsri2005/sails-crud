# sails-crud
Example performing CRUD operations in Sails.js using MySQL


## Installation &nbsp;
**With [node installed](http://nodejs.org/en/download):**
```sh


### Get started:
$ git clone git@github.com:aveshsri2005/sails-crud.git
$ cd sails-crud
$ npm install


# Get the latest stable release of Sails
$ npm install sails -g
```

# Install MySQL adapter for Waterline ORM
$ npm install sails-mysql
```


#Create user table in your database  

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(50) NOT NULL,
  `age` int(2) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;


#Update database credentials in connection file

        -> ./config/connection.js

	  mysql: {
	    adapter: 'sails-mysql',
	    host: 'localhost',
	    user: 'root',
	    password: 'root',
	    database: 'sailsproject'
	  }


#All set, Run application
$ sails lift



**Action URL's:**

        -> Add User      :  http://localhost:1337/user/new
        -> List Users    :  http://localhost:1337/user
        -> View User     :  http://localhost:1337/user/show/{$userId}
        -> Delete User   :  http://localhost:1337/user/delete/{$userId}

