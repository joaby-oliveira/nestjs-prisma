-- CreateTable
CREATE TABLE "Book" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "descript" TEXT NOT NULL,
    "bar_code" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Book_bar_code_key" ON "Book"("bar_code");
