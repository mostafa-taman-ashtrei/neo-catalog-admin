--
-- PostgreSQL database dump
--

-- Dumped from database version 12.7 (Ubuntu 12.7-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.7 (Ubuntu 12.7-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Post; Type: TABLE; Schema: public; Owner: neo
--

CREATE TABLE public."Post" (
    id integer NOT NULL,
    title text,
    status text,
    content jsonb,
    "publishDate" timestamp(3) without time zone,
    author integer
);


ALTER TABLE public."Post" OWNER TO neo;

--
-- Name: Post_id_seq; Type: SEQUENCE; Schema: public; Owner: neo
--

CREATE SEQUENCE public."Post_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Post_id_seq" OWNER TO neo;

--
-- Name: Post_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: neo
--

ALTER SEQUENCE public."Post_id_seq" OWNED BY public."Post".id;


--
-- Name: Tag; Type: TABLE; Schema: public; Owner: neo
--

CREATE TABLE public."Tag" (
    id integer NOT NULL,
    name text
);


ALTER TABLE public."Tag" OWNER TO neo;

--
-- Name: Tag_id_seq; Type: SEQUENCE; Schema: public; Owner: neo
--

CREATE SEQUENCE public."Tag_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Tag_id_seq" OWNER TO neo;

--
-- Name: Tag_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: neo
--

ALTER SEQUENCE public."Tag_id_seq" OWNED BY public."Tag".id;


--
-- Name: User; Type: TABLE; Schema: public; Owner: neo
--

CREATE TABLE public."User" (
    id integer NOT NULL,
    name text,
    email text,
    password text
);


ALTER TABLE public."User" OWNER TO neo;

--
-- Name: User_id_seq; Type: SEQUENCE; Schema: public; Owner: neo
--

CREATE SEQUENCE public."User_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."User_id_seq" OWNER TO neo;

--
-- Name: User_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: neo
--

ALTER SEQUENCE public."User_id_seq" OWNED BY public."User".id;


--
-- Name: _Post_tags_Tag_posts; Type: TABLE; Schema: public; Owner: neo
--

CREATE TABLE public."_Post_tags_Tag_posts" (
    "A" integer NOT NULL,
    "B" integer NOT NULL
);


ALTER TABLE public."_Post_tags_Tag_posts" OWNER TO neo;

--
-- Name: Post id; Type: DEFAULT; Schema: public; Owner: neo
--

ALTER TABLE ONLY public."Post" ALTER COLUMN id SET DEFAULT nextval('public."Post_id_seq"'::regclass);


--
-- Name: Tag id; Type: DEFAULT; Schema: public; Owner: neo
--

ALTER TABLE ONLY public."Tag" ALTER COLUMN id SET DEFAULT nextval('public."Tag_id_seq"'::regclass);


--
-- Name: User id; Type: DEFAULT; Schema: public; Owner: neo
--

ALTER TABLE ONLY public."User" ALTER COLUMN id SET DEFAULT nextval('public."User_id_seq"'::regclass);


--
-- Data for Name: Post; Type: TABLE DATA; Schema: public; Owner: neo
--

COPY public."Post" (id, title, status, content, "publishDate", author) FROM stdin;
\.


--
-- Data for Name: Tag; Type: TABLE DATA; Schema: public; Owner: neo
--

COPY public."Tag" (id, name) FROM stdin;
\.


--
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: neo
--

COPY public."User" (id, name, email, password) FROM stdin;
1	craig	craigpestell@gmail.com	$2a$10$flR0vQmZlnDBxvuN2wT.TeYAqffwSUveTk4YS0KH73uYMwtMgAgF.
\.


--
-- Data for Name: _Post_tags_Tag_posts; Type: TABLE DATA; Schema: public; Owner: neo
--

COPY public."_Post_tags_Tag_posts" ("A", "B") FROM stdin;
\.


--
-- Name: Post_id_seq; Type: SEQUENCE SET; Schema: public; Owner: neo
--

SELECT pg_catalog.setval('public."Post_id_seq"', 1, false);


--
-- Name: Tag_id_seq; Type: SEQUENCE SET; Schema: public; Owner: neo
--

SELECT pg_catalog.setval('public."Tag_id_seq"', 1, false);


--
-- Name: User_id_seq; Type: SEQUENCE SET; Schema: public; Owner: neo
--

SELECT pg_catalog.setval('public."User_id_seq"', 1, true);


--
-- Name: Post Post_pkey; Type: CONSTRAINT; Schema: public; Owner: neo
--

ALTER TABLE ONLY public."Post"
    ADD CONSTRAINT "Post_pkey" PRIMARY KEY (id);


--
-- Name: Tag Tag_pkey; Type: CONSTRAINT; Schema: public; Owner: neo
--

ALTER TABLE ONLY public."Tag"
    ADD CONSTRAINT "Tag_pkey" PRIMARY KEY (id);


--
-- Name: User User_pkey; Type: CONSTRAINT; Schema: public; Owner: neo
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);


--
-- Name: Post.author_index; Type: INDEX; Schema: public; Owner: neo
--

CREATE INDEX "Post.author_index" ON public."Post" USING btree (author);


--
-- Name: User.email_unique; Type: INDEX; Schema: public; Owner: neo
--

CREATE UNIQUE INDEX "User.email_unique" ON public."User" USING btree (email);


--
-- Name: _Post_tags_Tag_posts_AB_unique; Type: INDEX; Schema: public; Owner: neo
--

CREATE UNIQUE INDEX "_Post_tags_Tag_posts_AB_unique" ON public."_Post_tags_Tag_posts" USING btree ("A", "B");


--
-- Name: _Post_tags_Tag_posts_B_index; Type: INDEX; Schema: public; Owner: neo
--

CREATE INDEX "_Post_tags_Tag_posts_B_index" ON public."_Post_tags_Tag_posts" USING btree ("B");


--
-- Name: Post Post_author_fkey; Type: FK CONSTRAINT; Schema: public; Owner: neo
--

ALTER TABLE ONLY public."Post"
    ADD CONSTRAINT "Post_author_fkey" FOREIGN KEY (author) REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: _Post_tags_Tag_posts _Post_tags_Tag_posts_A_fkey; Type: FK CONSTRAINT; Schema: public; Owner: neo
--

ALTER TABLE ONLY public."_Post_tags_Tag_posts"
    ADD CONSTRAINT "_Post_tags_Tag_posts_A_fkey" FOREIGN KEY ("A") REFERENCES public."Post"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _Post_tags_Tag_posts _Post_tags_Tag_posts_B_fkey; Type: FK CONSTRAINT; Schema: public; Owner: neo
--

ALTER TABLE ONLY public."_Post_tags_Tag_posts"
    ADD CONSTRAINT "_Post_tags_Tag_posts_B_fkey" FOREIGN KEY ("B") REFERENCES public."Tag"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

