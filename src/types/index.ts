
// for blogs
export interface BlogPost {
    id: number | string;
    slug: string;
    title: string;
    content: string;
}


//for authentication
export interface AuthContextType {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;

}