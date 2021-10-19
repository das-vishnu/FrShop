package com.work.testing.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;


import com.work.testing.entity.Prod;

@RepositoryRestResource(collectionResourceRel="product", path="product-details")
//@CrossOrigin("http://localhost:4200"):to conect to 4200 but added in config for all
public interface ProductRepo extends JpaRepository<Prod,Long> {

	@RestResource(path="productid")
	Page<Prod> findById(@Param("id") Long id, Pageable pageable);
	//findBy<enity in prod to be compared>
	//it used to search
	//8080/product-details/search/findById?id=2
	//by adding restresource we can change url : product-details/search/productid?id=2
	
	@RestResource(path="productname")
	Page<Prod> findByName(@Param("name") String keyword , Pageable pageable);

}
