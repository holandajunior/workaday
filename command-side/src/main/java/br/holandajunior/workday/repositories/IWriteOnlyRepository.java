package br.holandajunior.workday.repositories;

import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.data.repository.Repository;

import java.io.Serializable;

/**
 * Created by holandajunior on 29/04/17.
 */

@NoRepositoryBean // Prevent spring consider it as repository bean
public interface IWriteOnlyRepository< T, ID extends Serializable> extends Repository< T, ID > {

    T save( T entity );
}
