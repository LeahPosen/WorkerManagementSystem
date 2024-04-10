﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Workers.Data;

#nullable disable

namespace Workers.Data.Migrations
{
    [DbContext(typeof(DataContext))]
    partial class DataContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.28")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("Workers.Core.Entities.Role", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<bool>("IsAdministrative")
                        .HasColumnType("bit");

                    b.Property<DateTime>("StartRole")
                        .HasColumnType("datetime2");

                    b.Property<int>("TagRoleId")
                        .HasColumnType("int");

                    b.Property<int?>("WorkerId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("WorkerId");

                    b.ToTable("Roles");
                });

            modelBuilder.Entity("Workers.Core.Entities.TagRole", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Tags");
                });

            modelBuilder.Entity("Workers.Core.Entities.Worker", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<DateTime>("BirthDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Gender")
                        .HasColumnType("int");

                    b.Property<bool>("IsActive")
                        .HasColumnType("bit");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("StartWorking")
                        .HasColumnType("datetime2");

                    b.Property<int?>("TagRoleId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("TagRoleId");

                    b.ToTable("Workers");
                });

            modelBuilder.Entity("Workers.Core.Entities.Role", b =>
                {
                    b.HasOne("Workers.Core.Entities.Worker", null)
                        .WithMany("RolesList")
                        .HasForeignKey("WorkerId");
                });

            modelBuilder.Entity("Workers.Core.Entities.Worker", b =>
                {
                    b.HasOne("Workers.Core.Entities.TagRole", null)
                        .WithMany("Workers")
                        .HasForeignKey("TagRoleId");
                });

            modelBuilder.Entity("Workers.Core.Entities.TagRole", b =>
                {
                    b.Navigation("Workers");
                });

            modelBuilder.Entity("Workers.Core.Entities.Worker", b =>
                {
                    b.Navigation("RolesList");
                });
#pragma warning restore 612, 618
        }
    }
}
