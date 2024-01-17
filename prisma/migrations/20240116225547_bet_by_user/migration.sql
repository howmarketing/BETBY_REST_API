/*
  Warnings:

  - Added the required column `email` to the `BetByUser` table without a default value. This is not possible if the table is not empty.
  - Added the required column `encrypt` to the `BetByUser` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastname` to the `BetByUser` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `BetByUser` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `BetByUser` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `BetByUser` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_BetByUser" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "betId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "encrypt" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_BetByUser" ("betId", "createdAt", "id", "updatedAt", "userId") SELECT "betId", "createdAt", "id", "updatedAt", "userId" FROM "BetByUser";
DROP TABLE "BetByUser";
ALTER TABLE "new_BetByUser" RENAME TO "BetByUser";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
