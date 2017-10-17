insert into luvluxeusers (email,auth_id)
values ($1,$2)
returning *;