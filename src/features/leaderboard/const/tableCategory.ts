import { SortCriteria } from '../../../shared/const/data';

export const Category: {
  label: string;
  sortableKey: SortCriteria | null;
  className?: string;
}[] = [
  { label: 'Rank', sortableKey: null },
  { label: 'Player Name', sortableKey: null, className: 'long' },
  { label: 'Guild Name', sortableKey: null, className: 'long' },
  { label: 'Score', sortableKey: 'score' },
  { label: 'Wins', sortableKey: 'wins' },
  { label: 'Losses', sortableKey: 'losses' },
  { label: 'Win Rate', sortableKey: 'winRate' },
];
