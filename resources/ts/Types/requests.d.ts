export interface Paginate<T> {
    current_page: number;
    data: T[];
    from: number;
    to: number;
    first_page_url: string;
    last_page_url: string;
    links: string[];
    path: string;
    per_page: number;
    prev_page_url: string;
    to: number;
    total: number;
}

export interface Link {
    active: boolean;
    label: string;
    url: string;
}
