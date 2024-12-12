import { useState } from "react";

export class Post {
    private ingredients!: string[];
    private steps!: string[];
    private user!: string;


    Post(ingredients: string[], steps: string[], user: string) {
        ingredients = this.ingredients;
        steps = this.steps;
        user = this.user;
    }

    get _ingredients() {
        return this.ingredients;
    }

    get _steps() {
        return this.steps;
    }

    get _user() {
        return this.user;
    }
}
//note: integrate this into the page.tsx at some point