select * 
from orders
where userid = $1 and status= 'open cart'

-- select * from orders
-- where status='cart'