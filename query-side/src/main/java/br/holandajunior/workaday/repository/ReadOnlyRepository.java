package br.holandajunior.workaday.repository;

import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.data.repository.Repository;

import java.io.Serializable;
import java.util.List;

/**
 * Created by holandajunior on 29/04/17.
 */

@NoRepositoryBean // Prevent spring consider it as repository bean
public interface ReadOnlyRepository< T, ID extends Serializable> extends Repository< T, ID > {

    List<T> findAll();
    T findOne( ID id );
}
