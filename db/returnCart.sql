select *
from lineitems
join luvluxeproducts on lineitems.productid = luvluxeproducts.id
where orderid= $1