select *
from luvluxeproducts
where upper(productname) like upper($1);