using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Workers.Data.Migrations
{
    public partial class F : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Role_Tags_NameId",
                table: "Role");

            migrationBuilder.DropForeignKey(
                name: "FK_Role_Workers_WorkerId",
                table: "Role");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Role",
                table: "Role");

            migrationBuilder.RenameTable(
                name: "Role",
                newName: "Roles");

            migrationBuilder.RenameIndex(
                name: "IX_Role_WorkerId",
                table: "Roles",
                newName: "IX_Roles_WorkerId");

            migrationBuilder.RenameIndex(
                name: "IX_Role_NameId",
                table: "Roles",
                newName: "IX_Roles_NameId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Roles",
                table: "Roles",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Roles_Tags_NameId",
                table: "Roles",
                column: "NameId",
                principalTable: "Tags",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Roles_Workers_WorkerId",
                table: "Roles",
                column: "WorkerId",
                principalTable: "Workers",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Roles_Tags_NameId",
                table: "Roles");

            migrationBuilder.DropForeignKey(
                name: "FK_Roles_Workers_WorkerId",
                table: "Roles");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Roles",
                table: "Roles");

            migrationBuilder.RenameTable(
                name: "Roles",
                newName: "Role");

            migrationBuilder.RenameIndex(
                name: "IX_Roles_WorkerId",
                table: "Role",
                newName: "IX_Role_WorkerId");

            migrationBuilder.RenameIndex(
                name: "IX_Roles_NameId",
                table: "Role",
                newName: "IX_Role_NameId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Role",
                table: "Role",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Role_Tags_NameId",
                table: "Role",
                column: "NameId",
                principalTable: "Tags",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Role_Workers_WorkerId",
                table: "Role",
                column: "WorkerId",
                principalTable: "Workers",
                principalColumn: "Id");
        }
    }
}
