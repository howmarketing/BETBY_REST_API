-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_BetByUser" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" TEXT NOT NULL,
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
INSERT INTO "new_BetByUser" ("betId", "createdAt", "email", "encrypt", "id", "lastname", "name", "password", "updatedAt", "userId", "username") SELECT "betId", "createdAt", "email", "encrypt", "id", "lastname", "name", "password", "updatedAt", "userId", "username" FROM "BetByUser";
DROP TABLE "BetByUser";
ALTER TABLE "new_BetByUser" RENAME TO "BetByUser";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
