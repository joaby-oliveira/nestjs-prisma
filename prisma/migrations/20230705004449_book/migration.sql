/*
  Warnings:

  - You are about to drop the column `descript` on the `Book` table. All the data in the column will be lost.
  - Added the required column `description` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Book" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "bar_code" TEXT NOT NULL
);
INSERT INTO "new_Book" ("bar_code", "id", "title") SELECT "bar_code", "id", "title" FROM "Book";
DROP TABLE "Book";
ALTER TABLE "new_Book" RENAME TO "Book";
CREATE UNIQUE INDEX "Book_bar_code_key" ON "Book"("bar_code");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
