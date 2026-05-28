type FilterProps = {
  location: string;
  setLocation: (value: string) => void;
  rating: string;
  setRating: (value: string) => void;
};

export default function Filters({
  location,
  setLocation,
  rating,
  setRating,
}: FilterProps) {
  return (
    <div className="flex gap-4 mb-6">
      <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="">All Locations</option>
        <option value="Tamil Nadu">Tamil Nadu</option>
        <option value="Karnataka">Karnataka</option>
        <option value="Telangana">Telangana</option>
      </select>

      <select
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="">All Ratings</option>
        <option value="4.5">4.5+</option>
        <option value="4.7">4.7+</option>
        <option value="4.8">4.8+</option>
      </select>
    </div>
  );
}