import {useMemo} from "react";

export const useSortedPosts = (posts, sort) => {

    const sortedPosts = useMemo(()=>{ // Допомагає виконувати функцію лише при певних змінах
        console.log("Спрацювала функція sortedPosts")
        if (sort){ // filter.sort
            return [...posts].sort((a, b) =>  a[sort].localeCompare(b[sort]))
        }

        return posts;

    }, [sort, posts]);  // Виконається, якщо хоть одне значення із масива зміниться

    return sortedPosts;

}

export const useFilterHook = (posts,search_key, sort, query) => {

    const sortedPosts = useSortedPosts(posts, sort);

    const sortedAndSearchedPosts = useMemo( () => {

        console.log("Спрацювала функція sortedAndSearchedPosts")

        // return sortedPosts.filter(post => post.title.toLowerCase().includes(query))   /*post.title тут нідочого, треба змінити на щось універсальне*/

        return search_key
            // ? sortedPosts.filter(post => post[search_key]?.toLowerCase().includes(query)) // замість search_key наприклад address
            ? sortedPosts.filter(post => search_key.some(obg => String(post[obg])?.toLowerCase().includes(query)))
            : sortedPosts

    }, [query, sortedPosts]);

    return sortedAndSearchedPosts;

}