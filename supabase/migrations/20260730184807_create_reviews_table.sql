/*
# Create reviews table (single-tenant, no auth)

1. New Tables
- `reviews`
  - `id` (uuid, primary key)
  - `name` (text, not null) - reviewer's display name
  - `rating` (integer, not null, 1-5) - star rating
  - `message` (text, not null) - review text
  - `created_at` (timestamptz, default now())
2. Security
- Enable RLS on `reviews`.
- Allow anon + authenticated CRUD because reviews are intentionally public/shared (no sign-in app).
3. Constraints
- rating CHECK between 1 and 5
- name length between 1 and 80
- message length between 1 and 1000
4. Seed data
- Insert a few starter reviews so the page looks alive from day one.
*/

CREATE TABLE IF NOT EXISTS reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 80),
  rating integer NOT NULL CHECK (rating BETWEEN 1 AND 5),
  message text NOT NULL CHECK (char_length(message) BETWEEN 1 AND 1000),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_reviews" ON reviews;
CREATE POLICY "anon_select_reviews" ON reviews FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_reviews" ON reviews;
CREATE POLICY "anon_insert_reviews" ON reviews FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_reviews" ON reviews;
CREATE POLICY "anon_update_reviews" ON reviews FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_reviews" ON reviews;
CREATE POLICY "anon_delete_reviews" ON reviews FOR DELETE
  TO anon, authenticated USING (true);

CREATE INDEX IF NOT EXISTS reviews_created_at_idx ON reviews (created_at DESC);

INSERT INTO reviews (name, rating, message) VALUES
  ('Arun Kumar', 5, 'Best mobile accessories shop in Anna Nagar! Got a tempered glass and case for my iPhone, quality is premium and price is very reasonable.'),
  ('Priya Sundar', 5, 'Loved the Samsung silicone case I bought here. The staff helped me pick the right one. Highly recommend Mobile Add Ons!'),
  ('Mohammed Faisal', 4, 'Good collection of covers and screen guards. The Spigen tempered glass is genuine. Shop is easy to find opposite Lifestyle.')
ON CONFLICT DO NOTHING;