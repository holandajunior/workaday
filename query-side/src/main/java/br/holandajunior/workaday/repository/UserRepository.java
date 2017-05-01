package br.holandajunior.workaday.repository;

import br.holandajunior.workaday.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by holandajunior on 29/04/17.
 */

public interface UserRepository extends JpaRepository< User, Long > {}
