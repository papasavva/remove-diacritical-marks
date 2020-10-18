export function removeDiacriticalMarks(text:string) : string {
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
}