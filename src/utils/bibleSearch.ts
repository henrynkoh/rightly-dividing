import { kjvData } from './kjvData';

export interface Verse {
  reference: string;
  text_kjv: string;
  text_korean: string;
  gospel_type: "kingdom" | "grace";
}

export interface SearchResult {
  query: string;
  total_verses: number;
  kingdom_verses: number;
  grace_verses: number;
  kingdom_top_verses: Verse[];
  grace_top_verses: Verse[];
}

// This function would be connected to a real database in production
// For now, we're using pre-classified sample data
export async function searchVerses(query: string): Promise<SearchResult> {
  // Normalize search query
  const normalizedQuery = query.toLowerCase().trim();
  
  // In a real app, this would query an actual database of Bible verses
  // For this prototype, we'll filter our sample data
  
  const allMatchingVerses = kjvData.filter((verse: Verse) => 
    verse.text_kjv.toLowerCase().includes(normalizedQuery) ||
    verse.reference.toLowerCase().includes(normalizedQuery)
  );
  
  const kingdomVerses = allMatchingVerses.filter((verse: Verse) => verse.gospel_type === "kingdom");
  const graceVerses = allMatchingVerses.filter((verse: Verse) => verse.gospel_type === "grace");
  
  // Get top 10 verses from each category
  const kingdomTopVerses = kingdomVerses.slice(0, 10);
  const graceTopVerses = graceVerses.slice(0, 10);
  
  return {
    query,
    total_verses: allMatchingVerses.length,
    kingdom_verses: kingdomVerses.length,
    grace_verses: graceVerses.length,
    kingdom_top_verses: kingdomTopVerses,
    grace_top_verses: graceTopVerses
  };
} 