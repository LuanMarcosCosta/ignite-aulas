import { RepositoryItem } from "./RepositoryItem";
import { useState, useEffect } from "react";


import '../styles/repositories.scss'

export function RepositoryList(){

    const [respositories, setRespositories] = useState([])

    useEffect(() => {
        fetch( 'https://api.github.com/orgs/Rocketseat/repos')
        .then(Response => Response.json())
        .then(data => setRespositories(data))
    }, []);

    return (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>

            <ul>                
              {respositories.map(repository => <RepositoryItem key={repository.name} repository={repository}/>
              )}
            </ul>
        </section>
    );
}