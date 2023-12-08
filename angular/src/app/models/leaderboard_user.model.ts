export interface LeaderboardUser {
    id: number,
    name: string,
    email: string,
    email_verified_at: string,
    meilleur_score: number,
    current_question_id: number,
    nbr_answered_question: number,
    current_score: number,
    created_at: string,
    updated_at: string,
}