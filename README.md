# SDchat-ndb
Is a simple open source project using javascript language this is a send - read direct message project without using any database.

# Status
Currently the source code is very rudimentary and is being developed by me.and this project currently does not use `Cross-origin resource sharing`
 so I recommend you to add `Cross-origin resource sharing`
Enter the source code if you want to use it for hosting

# Requirement
> Package: `Express`

the file `confighost.json` contains the host's configuration, (default port is 2000) <br>
> `/message/get` - API to receive message content <br>
> `/message/put` - Message sending API

**Note**: Since the database is not used, the messages will be saved in the variable and will be replaced by another message, which means you will not be able to see the old message


