using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Workers.Data.Migrations
{
    public partial class B : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Role_Tags_TagRoleId",
                table: "Role");

            migrationBuilder.RenameColumn(
                name: "TagRoleId",
                table: "Role",
                newName: "NameId");

            migrationBuilder.RenameIndex(
                name: "IX_Role_TagRoleId",
                table: "Role",
                newName: "IX_Role_NameId");

            migrationBuilder.AddForeignKey(
                name: "FK_Role_Tags_NameId",
                table: "Role",
                column: "NameId",
                principalTable: "Tags",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Role_Tags_NameId",
                table: "Role");

            migrationBuilder.RenameColumn(
                name: "NameId",
                table: "Role",
                newName: "TagRoleId");

            migrationBuilder.RenameIndex(
                name: "IX_Role_NameId",
                table: "Role",
                newName: "IX_Role_TagRoleId");

            migrationBuilder.AddForeignKey(
                name: "FK_Role_Tags_TagRoleId",
                table: "Role",
                column: "TagRoleId",
                principalTable: "Tags",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
